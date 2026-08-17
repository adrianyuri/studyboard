export default function GroupsLayout({
  children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="p-24 pt-10">
            <p className="mb-6 text-xs font-medium uppercase tracking-wide text-blue-700">
                StudyBoard / Groups
            </p>
            {children}
        </div>
    );
}
