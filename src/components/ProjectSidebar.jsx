import Button from "./Button"

const ProjectSidebar = ({onAddProject}) => {
  return (
    <div className="fixed bottom-0 top-4 bg-stone-900 text-stone-50 px-8 py-16 space-y-9 rounded-r-xl w-1/3 md:w-72">
      <div className="font-bold uppercase text-lg mb-8 md:text-xl text-stone-200">
        Your Projects
      </div>

      <Button onClick={onAddProject}>
        +Add Project
      </Button>
    </div>
  );
};

export default ProjectSidebar;
