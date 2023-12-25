import { UiFieldInput } from "./fields/UiFieldInput";
import { UiFieldLabel } from "./fields/UiFieldLabel";
import { UiFieldMessage } from "./fields/UiFieldMessage";

export function UiTextField({ label, required, helperText, errorText, className, inputProps }) {
    return (
        <div className={className}>
            <UiFieldLabel label={label} required={required} />
            <UiFieldInput required={required} errorText={errorText} {...inputProps} />
            <UiFieldMessage helperText={helperText} errorText={errorText} />
        </div>
    );
}