import Button from "../../ui/Button";

function DateSlot({ date }) {
  return (
    <li>
      <Button variation="bordered" size="small" direction="column">
        {date}date
      </Button>
    </li>
  );
}

export default DateSlot;
