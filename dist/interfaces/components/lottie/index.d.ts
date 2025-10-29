import animations from "components/types/lottie/animations";
interface IBase {
    size?: number;
}
export type ILottie = (IBase & {
    src: string;
    animation?: never;
}) | (IBase & {
    animation: keyof typeof animations;
    src?: never;
});
export {};
