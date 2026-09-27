export type Role = "user" | "assistant";

export interface ChatMessage {
  id: string;
  role: Role;
  content: string;
}

export interface QuickTopic {
  id: string;
  label: string;
  icon: string;
}

export interface ComposerAction {
  id: string;
  label: string;
  icon: string;
}
