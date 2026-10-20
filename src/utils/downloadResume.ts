import { resumeTextContent } from '@/data/portfolioData';

export function downloadResume() {
  const blob = new Blob([resumeTextContent], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Uzair_Zahoor_Software_Engineer_Resume.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
