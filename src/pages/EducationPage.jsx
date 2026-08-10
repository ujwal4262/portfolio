import React from 'react';
import Education from '../components/Education';
import Certifications from '../components/Certifications';

export default function EducationPage() {
  return (
    <div className="pt-24 space-y-12 pb-12">
      <Education />
      <Certifications />
    </div>
  );
}
