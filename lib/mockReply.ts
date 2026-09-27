const openers = [
  "Here's a way to think about it:",
  "Good question. Let's break it down:",
  "Sure — starting from the basics:",
  "Happy to help with that."
];

export function craftReply(prompt: string): string {
  const trimmed = prompt.trim();
  const opener = openers[trimmed.length % openers.length];
  return `${opener} "${trimmed}" touches on a few things worth untangling. Tell me a bit more about what you're aiming for and I'll tailor the next step.`;
}

export function waitTime(): number {
  return 700 + Math.random() * 500;
}
