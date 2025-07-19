import DefaultLayout from "@/layouts/default";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import {Textarea} from "@heroui/react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

export default function discover() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [size, setSize] = useState("md");
    const sizes = ["4xl"];
    const handleOpen = (size) => {
    setSize(size);
    onOpen();
    };

    return (
        <DefaultLayout>

            <div className="flex flex-wrap gap-3">
                {sizes.map((size) => (
                    <Button key={size} onPress={() => handleOpen(size)}>
                        Question
                    </Button>
                ))}
            </div>

            <Modal isOpen={isOpen} size={size} onOpenChange={onOpenChange}>

                <ModalContent>

                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Question</ModalHeader>

                            <ModalBody>

                                <form action="" onSubmit={handleSubmit(onSubmit)}>

                                    <Textarea {...register("question", { required: true, maxLength: { value: 250, message: "Maximum length reached" } })} type="text" placeholder="Enter your question" />
                                    {errors.question && <div> {errors.question.message} </div>}

                                    <Button type="submit">Submit</Button>

                                </form>

                            </ModalBody>

                            <ModalFooter>

                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>

                                <Button color="primary" onPress={onClose}>
                                    Post
                                </Button>

                            </ModalFooter>
                        </>
                    )}

                </ModalContent>

            </Modal>

            <div className="flex pl-[10vw] mt-[5vh]">
                
                <div className="w-[50vw] bg-gray-100 border border-gray-300 rounded-lg">

                    <div className="p-3 text-lg">
                        This is where the question will display. The summarized version of the question.
                    </div>

                </div>

            </div>

        </DefaultLayout>
    )
}