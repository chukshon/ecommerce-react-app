export interface UserEvent extends HTMLInputElement {
    e: {
        target: {
            checked: boolean
            name: string
        }

    }
    target: boolean;
}