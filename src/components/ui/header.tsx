import { MenuIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";

const Header = () => {
    return (
        <Card className="flex p-5 justify-between">
            <Button size="icon">
                <MenuIcon />
            </Button>
        </Card>
    );
}

export default Header;