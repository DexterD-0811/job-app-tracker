import { Column, JobApplication } from "@/lib/models/models.types"
import { Card, CardContent } from "./ui/card";
import { Edit2, ExternalLink, MoreVertical, Trash2 } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";

interface JobApplicationCardProps {
    job: JobApplication;
    columns: Column[];
}

export default function JobApplicationCard({job, columns}: JobApplicationCardProps) {
    return (
        <>
            <Card>
                <CardContent>
                    <div>
                        <div>
                            <h3>{job.position}</h3>
                            <p>{job.company}</p>
                            {job.description && 
                                <p>{job.description}</p>
                            }
                            {job.tags && job.tags.length > 0 && (
                                <div>
                                    {job.tags.map((tag, key) => (
                                        <span>{tag}</span>
                                    ))}
                                </div>
                            )}
                            {job.jobUrl && (
                                <a
                                href={job.jobUrl}
                                target="_blank"
                                className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-1"
                                onClick={(e) => e.stopPropagation()}
                                >
                                <ExternalLink className="h-3 w-3" />
                                </a>
                            )}
                        </div>

                        <div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="cursor-pointer">
                                        <MoreVertical />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem align="end">
                                        <Edit2 />
                                        Edit
                                    </DropdownMenuItem>
                                    {columns.length > 1 && (
                                        <>
                                            {columns.filter((c) => c._id !== job.columnId)
                                            .map((column, key) => (
                                                <DropdownMenuItem key={key}>
                                                    Move to {column.name}
                                                </DropdownMenuItem>
                                            ))}
                                        </>
                                    )}

                                    <DropdownMenuItem>
                                        <Trash2 />
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}