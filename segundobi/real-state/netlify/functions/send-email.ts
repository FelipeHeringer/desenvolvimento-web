import type { Handler, HandlerEvent } from "@netlify/functions";
import nodemailer, { SentMessageInfo } from "nodemailer";
import Mail from "nodemailer/lib/mailer";

const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN ?? "";

interface ContactPayload {
    fullName: string;
    email: string;
    subject: string;
    message: string;
}

interface Transporter {
    sendMail(mailOptions: Mail.Options): Promise<SentMessageInfo>;
}

interface ErrorResponse {
    statusCode: number;
    message: string;
}

const corsHeaders = (origin: string) => ({
    "Access-Control-Allow-Origin": ALLOWED_ORIGIN || origin,
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
});

const handler: Handler = async (event: HandlerEvent) => {
    const origin = event.headers["origin"] ?? "";


    try {
        const earlyResponse = validateRequestMethod(event, origin);
        if (earlyResponse) return earlyResponse;

        const body = JSON.parse(event.body ?? "{}") as ContactPayload;

        const { fullName, email, subject, message } = body;
        validateRequiredFields(fullName, email, subject, message);
        const transporter = createTransporter();

        return await sendEmail(transporter, fullName, email, subject, message, origin);

    } catch (error) {

        const errorResponse = JSON.parse(error.message) as ErrorResponse;
        console.error("Erro:", errorResponse.message);

        return {
            statusCode: errorResponse.statusCode ?? 400,
            headers: corsHeaders(origin),
            body: JSON.stringify({ error: errorResponse.message ?? "Requisição inválida." }),
        }
    }
};

function validateRequestMethod(
    event: HandlerEvent,
    origin: string
): { statusCode: number; headers: Record<string, string>; body: string } | null {
    if (event.httpMethod === "OPTIONS") {
        return {
            statusCode: 204,
            headers: corsHeaders(origin),
            body: "",
        };
    }
    if (event.httpMethod !== "POST") {
        throw new Error(JSON.stringify({ "statusCode": 405, "message": "Método não permitido." }));
    }
    return null;
}

function validateRequiredFields(fullName: string, email: string, subject: string, message: string) {
    if (!fullName?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
        throw new Error(JSON.stringify({ "statusCode": 422, "message": "Campos obrigatórios não preenchidos." }));
    }

    if (!isValidEmail(email)) {
        throw new Error(JSON.stringify({ "statusCode": 422, "message": "E-mail inválido." }));
    }
}

function isValidEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
}

function createTransporter() {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT ?? 587),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    return transporter;
}

async function sendEmail(
    transporter: Transporter,
    fullName: string,
    email: string,
    subject: string,
    message: string,
    origin: string
) {
    try {
        await transporter.sendMail({
            from: `<${process.env.SMTP_USER}>`,
            replyTo: email,
            to: process.env.CONTACT_EMAIL,
            subject: subject,
            text: message,
            html: `
            <h2>${fullName}</h2>
            <p><strong>E-mail:</strong> ${email}</p>
            <p><strong>Mensagem:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
          `,
        });

        return {
            statusCode: 200,
            headers: corsHeaders(origin),
            body: JSON.stringify({ message: "E-mail enviado com sucesso." }),
        };
    } catch (error) {
        console.error("Erro ao enviar e-mail:", error);
        throw new Error(JSON.stringify({ "statusCode": 500, "message": "Falha ao enviar o e-mail. Tente novamente mais tarde." }));
    }
}
export { handler };