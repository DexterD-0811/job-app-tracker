"use client";

import { useState, useEffect } from "react";
import { Board, Column, JobApplication } from "../models/models.types";
import { updateJobApplication } from "../actions/job-applications";

export function useBoard(initialBoard?: Board | null) {
    const [board, setBoard] = useState<Board | null>(initialBoard || null);
    const [columns, setColumns] = useState<Column[]>(initialBoard?.columns || []);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (initialBoard) {
        setBoard(initialBoard);
        setColumns(initialBoard.columns || []);
        }
    }, [initialBoard]);

    async function moveJob(
        jobApplicationId: string, 
        newColumnId: string,
        newOrder: number,
    ) {
        console.log(jobApplicationId, newColumnId, newOrder);
    }

    return { board, columns, error, moveJob };
}