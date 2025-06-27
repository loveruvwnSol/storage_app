import { Sidebar } from "@/components/organisms/Sidebar";
import { MyStorage } from "@/components/templates/MyStorage";

const Index = () => {
  return (
    <div className="flex w-full h-full bg-gray-50">
      <Sidebar />
      <MyStorage />
    </div>
  );
};

export default Index;
