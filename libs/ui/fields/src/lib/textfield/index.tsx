export function Textfield() {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend">What is your name?</legend>
      <input type="text" className="input" placeholder="Type here" />
      <p className="label">Optional</p>
    </fieldset>
  );
}
