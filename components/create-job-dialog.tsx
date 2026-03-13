import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

interface CreateJobApplicationDialogProps {
    columnId: string;
    boardId: string;
}

export default function CreateJobApplicationDialog({columnId, boardId} : CreateJobApplicationDialogProps) {
    return (
        <Dialog>
            <DialogTrigger>
                <Button variant="outline">
                    <Plus />
                    Add Job
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add Job Application</DialogTitle>
                    <DialogDescription>Track a new job application</DialogDescription>
                </DialogHeader>
                <form>
                    <div>
                        <div>
                            <div>
                                <Label>Company *</Label>
                                <Input id="company" required />
                            </div>
                            <div>
                                <Label>Position *</Label>
                                <Input id="position" required />
                            </div>
                        </div>
                        <div>
                            <Label>Location</Label>
                            <Input id="location" />
                        </div>
                        <div>
                            <Label>Salary</Label>
                            <Input id="salary" />
                        </div>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}