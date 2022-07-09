interface StepList {
    label: string;
    showButton: boolean;
}

export const steps = [
    {
        label: 'ENTRADA',
        showButton: false
    },
    {
        label: 'AUTORIZAR',
        showButton: true
    },
    {
        label: 'FINALIZAR',
        showButton: true
    },
    {
        label: 'SAÍDA',
        showButton: false
    }
]