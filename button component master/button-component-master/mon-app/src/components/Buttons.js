import Button from "./Button";


const Buttons = () => {
  return (
    <div className="buttonsContainer">
      <h1>Buttons</h1>
      <div className="box1">
        <Button content="Default" labelContent="<Button />" />
        <Button
          content="Default"
          labelContent="&:hover, &:active"
          labelClass="labelHover"
          style={{ backgroundColor: "#888" }}
        />
        <Button
          content="Default"
          labelContent="<Button variant='outlined' />"
          style={{
            backgroundColor: "transparent",
            color: "#2962ff",
            border: "1px solid #2962ff",
          }}
        />
        <Button
          content="Default"
          labelContent="&:hover, &:active"
          labelClass="labelHover"
          style={{
            backgroundColor: "#eaefff",
            color: "#2962ff",
            border: "1px solid #2962ff",
          }}
        />
        <Button
          content="Default"
          labelContent="<Button variant='text' />"
          style={{ color: "#2962ff", backgroundColor: "transparent" }}
        />
        <Button
          content="Default"
          labelClass="labelHover"
          labelContent="&:hover, &:focus"
          style={{ color: "#2962ff", backgroundColor: "#eaefff" }}
        />
      </div>
      <div className="box2">
        <Button
          content="Default"
          labelContent="<Button disableShadow />"
          style={{ color: "#fff", background: "#2962ff" }}
        />
      </div>
      <div className="box3">
        <Button
          content="Disabled"
          labelContent="<Button disabled />"
          style={{ textDecoration: "disabled" }}
          disabled
        />

        <Button
          content="Disabled"
          labelContent="<Button variant='text' disabled />"
          style={{ backgroundColor: "transparent", color: "#888" }}
        />
      </div>
      <div className="box4">
        <Button
          content="Default"
    
          labelContent="<Button startIcon='local_groceery_store' />"
          style={{ color: "#fff", backgroundColor: "#2962ff" }}
          btnClass="iconLeft"
        />
        <Button
          content="Default"
     
          labelContent="<Button startIcon='local_groceery_store' />"
          style={{
            color: "#fff",
            backgroundColor: "#2962ff",
          }}
          btnClass="iconRight"
        />
      </div>
      <div className="box5">
        <Button
          content="Default"
          labelContent="<Button size='sm' />"
          style={{
            color: "#fff",
            backgroundColor: "#2962ff",
            padding: "0.5rem 1rem",
          }}
        />
        <Button
          content="Default"
          labelContent="<Button size='md' />"
          style={{
            color: "#fff",
            backgroundColor: "#2962ff",
          }}
        />
        <Button
          content="Default"
          labelContent="<Button size='lg' />"
          style={{
            color: "#fff",
            backgroundColor: "#2962ff",
            padding: "1.5rem 3rem",
          }}
        />
      </div>
      <div className="box6">
        <Button content="Default" labelContent="<Button color='default' />" />
        <Button
          content="Primary"
          labelContent="<Button color='primary' />"
          style={{ backgroundColor: "#2962ff", color: "#fff" }}
        />
        <Button
          content="Secondary"
          labelContent="<Button color='secondary' />"
          style={{ color: "#fff", backgroundColor: "#455a64" }}
        />
        <Button
          content="Danger"
          labelContent="<Button color='danger' />"
          style={{ color: "#fff", backgroundColor: "#d32f2f" }}
        />
        <Button
          content="Default"
          labelContent="&:hover, &:active"
          labelClass="labelHover"
          style={{ backgroundColor: "#888" }}
        />
        <Button
          content="Primary"
          style={{
            color: "#fff",
            backgroundColor: "#0039cb",
            marginTop: "1rem",
          }}
        />
        <Button
          content="Secondary"
          style={{
            color: "#fff",
            backgroundColor: "#1c313a",
            marginTop: "1rem",
          }}
        />
        <Button
          content="Danger"
          style={{
            color: "#fff",
            backgroundColor: "#9a0007",
            marginTop: "1rem",
          }}
        />
      </div>

    
     
    </div>
  );
};

export default Buttons;