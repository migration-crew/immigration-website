import { ContactItem } from "@/data/ContactData";

type Props = {
  className: string | undefined;
  components: ContactItem[];
};

export default function ContactMenu({ className, components }: Props) {
  return (
    <div className={`flex space-x-4 ${className}`}>
      {components.map((component) => (
        <a target="_blank" key={component.name} href={component.href}>
          <component.imageComponent size={35} />
        </a>
      ))}
    </div>
  );
}
