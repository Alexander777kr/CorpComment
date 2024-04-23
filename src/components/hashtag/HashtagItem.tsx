type HashtagItemProps = {
  onSelectCompany: (company: string) => void;
  company: string;
};

export default function HashtagItem({
  company,
  onSelectCompany,
}: HashtagItemProps) {
  return (
    <li>
      <button onClick={() => onSelectCompany(company)}>#{company}</button>
    </li>
  );
}
