import { IceCream } from "lucide-react";
import MenubarComponent from "./components/menubar/menu-bar";
import { Button } from "./components/ui/button";

import { Progress } from "./components/ui/progress";
import { CardWithForm } from "./components/cards/card-with-form";
import { CarouselDemo } from "./components/carousel/carousel-demo";
import { AlertDialogDemo } from "./components/alert dialog/alert-dialog-demo";

const App = () => {
    return (
        <div className='p-5  h-fit space-y-4 bg-gray-100'>
            <Button variant='default' size='icon'>
                <IceCream />
            </Button>
            <Progress className='w-[400px]' value={73} />
            <MenubarComponent />
            <CardWithForm />
            <CarouselDemo />
            <AlertDialogDemo />
        </div>
    );
};

export default App;
