import { DropdownButton } from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import {useState} from 'react';

function Filter({onFilterChange}) {

    const [selectedActivity, setSelectedActivity] = useState('All Events')

    function onSelectHandler(eventKey){
        onFilterChange(eventKey);
        setSelectedActivity(eventKey);
    }

  return (
    <div>
      <Dropdown onSelect={onSelectHandler} size="200px">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {selectedActivity}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="All Events">All Events</Dropdown.Item>
          <Dropdown.Item eventKey="Trekking">Trekking</Dropdown.Item>
          <Dropdown.Item eventKey="Skiing">Skiing</Dropdown.Item>
          <Dropdown.Item eventKey="Rafting">Water Rafting</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Filter;
