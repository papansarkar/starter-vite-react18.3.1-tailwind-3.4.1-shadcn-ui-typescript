import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { equipmentData } from "@/utils/constant";

export function CarouselDemo() {
    return (
        <Carousel className='ml-20 w-full max-w-xs'>
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className='p-1'>
                            <Card>
                                <CardContent className='flex aspect-square items-center justify-center p-6'>
                                    <span className='text-4xl font-semibold'>
                                        {index + 1}
                                    </span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}

                {
                    // equipmentData.map((equip, index) => (
                    //     <CarouselItem key={index}>
                    //         <div className='p-1'>
                    //             <Card>
                    //                 <CardContent className='flex aspect-fit items-center justify-center p-0'>
                    //                     <img
                    //                         src={equip.image}
                    //                         className='text-4xl font-semibold aspect-fit rounded-xl'
                    //                     >
                    //                         {/* {index + 1} */}
                    //                     </img>
                    //                 </CardContent>
                    //             </Card>
                    //         </div>
                    //     </CarouselItem>
                    // ))
                }
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
