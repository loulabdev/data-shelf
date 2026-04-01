import { useMemo } from 'react';
import { ExamType } from '../types/exam';
import { loadAllExamData } from '../utils/dataLoader';

export const useExamData = (examType: ExamType) => {
  const dataset = useMemo(() => loadAllExamData(examType), [examType]);

  return {
    theoryData: dataset.theory,
    pastData: dataset.past,
  };
};
