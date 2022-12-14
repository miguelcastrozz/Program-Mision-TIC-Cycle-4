import Card from "../components/utils/Card";

export function Nav({ children }) {
    return (
        <nav>
            <Card>
                {children}
            </Card>
        </nav>
    );
}
