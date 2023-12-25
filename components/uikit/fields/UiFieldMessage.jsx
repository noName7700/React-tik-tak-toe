export function UiFieldMessage({ helperText, errorText }) {
    const isError = !!errorText;
    const messageText = errorText || helperText;

    return (
        <p className={`mt-1 text-sm ${isError ? "text-orange-600" : "text-slate-400"}`}>
            {messageText}
        </p>
    );
}