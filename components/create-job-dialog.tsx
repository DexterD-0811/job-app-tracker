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
                <Button 
                    variant="outline"
                    className="w-full mb-4 justify-start text-muted-foreground border-dashed border-2 hover:border-solid hover:bg-muted/50"
                >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Job
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle>Add Job Application</DialogTitle>
                    <DialogDescription>Track a new job application</DialogDescription>
                </DialogHeader>
                <form className="space-y-4">
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Company *</Label>
                                <Input id="company" required />
                            </div>
                            <div className="space-y-2">
                                <Label>Position *</Label>
                                <Input id="position" required />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Location</Label>
                                <Input id="location" />
                            </div>
                            <div className="space-y-2">
                                <Label>Salary</Label>
                                <Input id="salary" placeholder="e.g., ₱15,000 - ₱150,000" />
                            </div>
                        </div>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}