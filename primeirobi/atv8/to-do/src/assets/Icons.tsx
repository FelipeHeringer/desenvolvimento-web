interface IconProps {
    color?: string;
    width?: number;
    height?: number;
}

export function CloseIcon({ color = "#1f1f1f", width = 24, height = 24 }: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill={color}
            viewBox="0 -960 960 960"
        >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224z"></path>
        </svg>
    );
}

export function PlusIcon({ color = "#1f1f1f", width = 24, height = 24 }: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill={color}
            viewBox="0 -960 960 960"
        >
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80z"></path>
        </svg>
    );
}
