
import React from 'react';
import { Book, Briefcase, Calendar, Clock, User } from 'lucide-react';

export const servicesData = [
  {
    id: 1,
    title: "Career Discovery Session",
    slug: "career-discovery",
    shortDescription: "Identify your strengths, values and passions to find career directions aligned with who you are.",
    fullDescription: `<p>This intensive one-on-one session helps you gain clarity about your career path by uncovering your unique strengths, values, and passions.</p>
    
    <p>During our 90-minute Career Discovery Session, we'll:</p>
    
    <ul>
      <li>Use specialized assessments to identify your natural talents and strengths</li>
      <li>Clarify your core values and how they should align with your career</li>
      <li>Explore your interests and passions to find meaningful work</li>
      <li>Identify potential career paths that match your unique profile</li>
      <li>Create an action plan for moving forward with confidence</li>
    </ul>
    
    <p>You'll leave with a clear understanding of what you want from your career and the first steps to get there.</p>`,
    price: "$297",
    duration: "90 minutes",
    icon: <Calendar className="w-6 h-6" />,
    featured: true,
    category: "individual",
    mostWanted: true,
    isPaid: true
  },
  {
    id: 2,
    title: "Career Transition Coaching",
    slug: "career-transition",
    shortDescription: "Navigate career changes with confidence through structured coaching and personalized action plans.",
    fullDescription: `<p>Ready to make a meaningful career change but feeling overwhelmed by the process? My Career Transition Coaching program provides the structure, support, and strategy you need to successfully navigate your transition.</p>
    
    <p>This 3-month coaching partnership includes:</p>
    
    <ul>
      <li>Six 60-minute one-on-one coaching sessions</li>
      <li>Comprehensive career assessment and exploration</li>
      <li>Industry and role research guidance</li>
      <li>Customized transition plan with actionable steps</li>
      <li>Resume and personal branding strategy</li>
      <li>Interview preparation and confidence building</li>
      <li>Email support between sessions</li>
    </ul>
    
    <p>Whether you're changing industries, roles, or starting your own business, this program will help you navigate the challenges and achieve a successful transition.</p>`,
    price: "$1,497",
    duration: "3 months",
    icon: <Clock className="w-6 h-6" />,
    featured: false,
    category: "individual",
    mostWanted: false,
    isPaid: true
  },
  {
    id: 3,
    title: "Resume & LinkedIn Makeover",
    slug: "resume-linkedin-makeover",
    shortDescription: "Transform your professional documents and online presence to attract the right opportunities.",
    fullDescription: `<p>Stand out to employers and recruiters with professionally crafted career materials that showcase your unique value and achievements.</p>
    
    <p>The Resume & LinkedIn Makeover package includes:</p>
    
    <ul>
      <li>90-minute strategy session to identify your career goals and unique value proposition</li>
      <li>Complete resume redesign and content optimization</li>
      <li>LinkedIn profile overhaul (headline, about section, experience, skills)</li>
      <li>Professional headline and summary crafted to attract recruiters</li>
      <li>Achievement-focused content that highlights your impact</li>
      <li>Keyword optimization for applicant tracking systems</li>
      <li>30-minute follow-up session to review and finalize materials</li>
    </ul>
    
    <p>You'll receive finalized documents ready to use in your job search, plus guidance on how to leverage your new professional brand.</p>`,
    price: "$497",
    duration: "2 weeks",
    icon: <Book className="w-6 h-6" />,
    featured: false,
    category: "resources",
    mostWanted: false,
    isPaid: true
  },
  {
    id: 4,
    title: "Interview Preparation",
    slug: "interview-preparation",
    shortDescription: "Build confidence and master the skills to excel in job interviews and showcase your true potential.",
    fullDescription: `<p>Maximize your interview success with personalized coaching that helps you communicate your value with clarity and confidence.</p>
    
    <p>The Interview Preparation program includes:</p>
    
    <ul>
      <li>Two 60-minute coaching sessions</li>
      <li>Analysis of job descriptions to identify key requirements</li>
      <li>Preparation of compelling stories that showcase your achievements</li>
      <li>Practice with common and challenging interview questions</li>
      <li>Mock interview with personalized feedback</li>
      <li>Strategies for addressing potential concerns</li>
      <li>Guidance on asking intelligent questions to interviewers</li>
      <li>Follow-up email and negotiation strategies</li>
    </ul>
    
    <p>You'll approach interviews with greater confidence, clarity, and the ability to authentically showcase your value to potential employers.</p>`,
    price: "$397",
    duration: "2 sessions",
    icon: <User className="w-6 h-6" />,
    featured: false,
    category: "resources",
    mostWanted: false,
    isPaid: true
  },
  {
    id: 5,
    title: "Career Clarity Workshop",
    slug: "career-clarity-workshop",
    shortDescription: "A group workshop to help you gain insights, clarity, and direction in your professional journey.",
    fullDescription: `<p>Join a small group of like-minded professionals in this intensive workshop designed to bring clarity to your career direction.</p>
    
    <p>In this 3-hour virtual workshop, you'll:</p>
    
    <ul>
      <li>Complete targeted exercises to identify your core values, strengths, and interests</li>
      <li>Learn a framework for evaluating career options against your personal criteria</li>
      <li>Discover techniques to overcome limiting beliefs and career fears</li>
      <li>Create a personal career vision statement to guide your decisions</li>
      <li>Develop an initial action plan with accountability measures</li>
      <li>Connect with others on similar career journeys</li>
    </ul>
    
    <p>Limited to 8 participants to ensure personalized attention and meaningful interaction. Includes workshop materials and a follow-up resource guide.</p>`,
    price: "$197",
    duration: "3 hours",
    icon: <User className="w-6 h-6" />,
    featured: false,
    category: "group",
    mostWanted: false,
    isPaid: true
  },
  {
    id: 6,
    title: "Executive Coaching",
    slug: "executive-coaching",
    shortDescription: "Personalized coaching for leaders to enhance effectiveness, navigate challenges, and achieve professional goals.",
    fullDescription: `<p>Elevate your leadership impact with personalized executive coaching that addresses your unique challenges and objectives.</p>
    
    <p>This 6-month executive coaching program includes:</p>
    
    <ul>
      <li>Initial leadership assessment to identify strengths and development areas</li>
      <li>Twelve 60-minute coaching sessions tailored to your specific goals</li>
      <li>360-degree feedback collection and analysis (optional)</li>
      <li>Development of personalized leadership strategies and techniques</li>
      <li>Action planning with measurable outcomes</li>
      <li>Email and text support between sessions</li>
      <li>Relevant leadership resources and tools</li>
      <li>Final session focused on sustaining progress</li>
    </ul>
    
    <p>Coaching focuses on your specific needs, which may include strategic thinking, executive presence, communication, team leadership, work-life balance, or career advancement.</p>`,
    price: "$4,997",
    duration: "6 months",
    icon: <Briefcase className="w-6 h-6" />,
    featured: true,
    category: "individual",
    mostWanted: true,
    isPaid: true
  },
  {
    id: 7,
    title: "Team Building",
    slug: "team-building",
    shortDescription: "Strengthen team dynamics, improve communication, and build a more cohesive and effective working environment.",
    fullDescription: `<p>Effective teams are the foundation of successful organizations. Our team building sessions help your group develop stronger connections, improve collaboration, and enhance overall performance.</p>
    
    <p>The Team Building program includes:</p>
    
    <ul>
      <li>Pre-session assessment to identify team strengths and opportunities</li>
      <li>Customized 4-hour workshop designed for your team's specific needs</li>
      <li>Engaging activities that build trust and improve communication</li>
      <li>Conflict resolution strategies for healthier workplace dynamics</li>
      <li>Team action planning for ongoing development</li>
      <li>30-day follow-up session to review progress and address challenges</li>
    </ul>
    
    <p>Available for teams of 5-20 people, this program can be delivered in-person or virtually, depending on your team's location and preferences.</p>`,
    price: "$2,497",
    duration: "4 hours + follow-up",
    icon: <Briefcase className="w-6 h-6" />,
    featured: false,
    category: "group",
    mostWanted: false,
    isPaid: true
  }
];
