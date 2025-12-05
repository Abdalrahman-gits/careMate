import Button from "../../ui/Button";

function TimeSlot({ date }) {
  return (
    <li>
      <Button variation="bordered" size="small">
        {date}time
      </Button>
    </li>
  );
}

export default TimeSlot;
