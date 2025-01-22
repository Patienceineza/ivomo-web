export type PaginationType<list> = {
    total: number;
    list: list[];
    previousPage?: null;
    nextPage?: null;
    lastPage: number;
    currentPage: number;
}

export type Modal = {
    id: string;
    created_at: string;
    updated_at: string;
}
// types/index.ts

export type BlogType = {
    id: string;
    title: string;
    content: string;
    image?: string;
    createdAt: Date;
  };
  
  export type PartnerType = {
    id: string;
    name: string;
    website: string;
    logo?: string;
    createdAt: Date;
  };
  
  export type CompetitionType = {
    id: string;
    title: string;
    description: string;
    date: Date;
    prize?: string;
  };
  
  export type BookType = {
    id: string;
    title: string;
    author: string;
    publicationDate: Date;
    genre: string;
    summary?: string;
    file: string;
    image:string;
    createdAt: Date;
    updatedAt: Date;
  };
  
  export type QuestionType = {
    id: string;
    name?: string;
    body: string;
    createdAt: Date;
    updatedAt: Date;
    answers?: AnswerType[];
  };
  
  export type AnswerType = {
    id: string;
    body: string;
    questionId: string;
    createdAt: Date;
    updatedAt: Date;
  };
  
  // Payload types for creating and editing entities
  export type BlogPayload = {
    title: string;
    content: string;
    image?: string;
  };
  
  export type PartnerPayload = {
    name: string;
    website: string;
    logo?: string;
  };
  
  export type CompetitionPayload = {
    title: string;
    description: string;
    date: Date;
    prize?: string;
  };
  
  export type BookPayload = {
    title: string;
    author: string;
    publicationDate: Date;
    genre: string;
    summary?: string;
    file: string;
  };
  
  export type QuestionPayload = {
    name?: string;
    body: string;
  };
  
  export type AnswerPayload = {
    body: string;
    questionId: string;
  };
  