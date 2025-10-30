export interface IButton {
    loading?: boolean;
    disabled?: boolean;
    type?: string;
    onClick?: () => void;
    label: string;
}
