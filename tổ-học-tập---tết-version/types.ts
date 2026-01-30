
export interface Member {
  id: string;
  name: string;
  role: string;
  strength: string;
  tags: string[];
  description: string;
  imageUrl: string;
  achievements: string[];
  motto: string;
}

export interface NavItem {
  label: string;
  path: string;
}
