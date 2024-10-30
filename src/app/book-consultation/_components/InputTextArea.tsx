export function InputTextArea() {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        className="rounded-[8px] py-3 px-4"
      ></textarea>
    </div>
  );
}
