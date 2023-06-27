import { ReactNode } from "react";
import MainHeader from "./main-header";

interface Props {
    children: ReactNode
}

export default function Layout({ children }: Props) {
    return <>
        <MainHeader />
        <main>
            {children}
        </main>
    </>;
}