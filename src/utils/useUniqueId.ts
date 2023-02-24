import { customAlphabet } from 'nanoid/non-secure';
import { useState } from 'react';

const nanoid = customAlphabet('0123456789abcdefghijklmnopqrstuvwxyz', 10);

export const useUniqueId = (): string => {
  const [id] = useState(nanoid());

  return id;
};
