import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    color?: 'primary' | 'secondary' | 'danger';
    onclick: () => void;
}

const Button = ({ children, onclick, color = 'primary' }: Props) => {
    return (
        <>
            <div className={'btn btn-' + color} onClick={onclick}>
                {children}
            </div>
        </>
    );
};

export default Button;