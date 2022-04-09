import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

/**
 * Modal that renders based on what the user provides as an object
 * @param {*} activeItem, the item the modal will use to render details
 * @param {*} toggle, function that allows the modal to be toggled
 * @param {*} onSave, function that initiates a change in the activeItem
 */
function CustomModal({
  activeItem,
  toggle,
  onSave
}) {
  // sets up a local item that will be used to update locally without interacting with an API / true data until saved
  let [localItem, setLocalItem] = useState(activeItem);

  // allow us to update the localItem with any input change
  let handleChange = e => {
    let { name, value } = e.target;

    if (e.target.type === 'checkbox') {
      value = e.target.checked;
    }

    setLocalItem({...localItem, [name]: value })
  }

  return (
    <Modal isOpen={true}>
      <ModalHeader>Todo Item</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="todo-title">Title</Label>
            <Input
              type="text"
              id="todo-title"
              name="title"
              value={localItem.title}
              onChange={(e) => handleChange(e)}
              placeholder="Title Of Project"
            />
          </FormGroup>
          <FormGroup>
            <Label for="todo-description">Description</Label>
            <Input
              type="text"
              id="todo-description"
              name="description"
              value={localItem.description}
              onChange={(e) => handleChange(e)}
              placeholder="Describe the Project"
            />
          </FormGroup>
          <FormGroup>
            <Label for="todo-description">Thumbnail URL</Label>
            <Input
              type="text"
              id="todo-description"
              name="thumbnail_url"
              value={localItem.thumbnail_url}
              onChange={(e) => handleChange(e)}
              placeholder="http://blahblah.com"
            />
          </FormGroup>
          <FormGroup>
            <Label for="todo-description">Project URL</Label>
            <Input
              type="text"
              id="todo-description"
              name="project_url"
              value={localItem.project_url}
              onChange={(e) => handleChange(e)}
              placeholder="http://blahblah.com"
            />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="completed"
                checked={localItem.completed}
                onChange={(e) => handleChange(e)}
              />
              Completed
            </Label>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button
          color="success"
          onClick={() => onSave(localItem)}
        >
          Save
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default CustomModal;