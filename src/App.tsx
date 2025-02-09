import { IceCream } from "lucide-react";
import MenubarComponent from "./components/common/menu-bar";
import { Button } from "./components/ui/button";
import { Progress } from "./components/ui/progress";
import { CardWithForm } from "./components/common/card-with-form";
import { CarouselDemo } from "./components/common/carousel-demo";
import { AlertDialogDemo } from "./components/common/alert-dialog-demo";
import { ComboboxDemo } from "./components/common/combo-box-demo";
import ThemeToggle from "./components/common/theme-toggle";

const App = () => {
  const length = 10;
  return (
    <div className='p-5 space-y-4 h-screen overflow-auto bg-gray-100 dark:bg-[#000000]'>
      <div className='flex items-center gap-8 justify-between'>
        <MenubarComponent />

        <div className='flex gap-4'>
          <Button variant='default' size='icon'>
            <IceCream />
          </Button>
          <ThemeToggle />
        </div>
      </div>
      <div className='pt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        <Progress className='w-full' value={length} />
        <CardWithForm />
        <CarouselDemo length={length} />
        <AlertDialogDemo />
        <ComboboxDemo />
      </div>
    </div>
  );
};

export default App;
