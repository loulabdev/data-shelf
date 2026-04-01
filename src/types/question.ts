import { ContentCategory, ExamType, SubjectType } from './exam';

export interface ExamQuestion {
  id: string;
  category: ContentCategory;
  exam_type: ExamType;
  subject: SubjectType;
  question: string;
  options: [string, string, string, string];
  answer_idx: number;
  explanation: string;
  codeSnippet?: string;
  latex?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  tags?: string[];
}

export interface ExamQuestionSet {
  examType: ExamType;
  theory: ExamQuestion[];
  past: ExamQuestion[];
}
