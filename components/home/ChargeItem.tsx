import { Button } from "../ui/button";

type ChargeItemProps = {
    chargeName: string;
};

export default function ChargeItem({ chargeName }: ChargeItemProps) {
    return (
        <li>
            <Button variant="link">{chargeName}</Button>
        </li>
    );
}
