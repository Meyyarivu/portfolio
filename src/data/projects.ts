export type PortfolioProject = {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  sourceUrl?: string;
  sourceUrlPlaceholder?: string;
  liveUrl?: string;
  image?: string;
  placeholder?: boolean;
  status?: string;
  overview?: string;
  problem?: string;
  solution?: string;
  workflow?: string[];
  features?: string[];
  learnings?: string;
};

// Technology tags below were checked against each repository's source and manifests.
export const PROJECTS: PortfolioProject[] = [
  {
    slug: "rag-chatbot",
    title: "RAG Chatbot",
    description: "A Retrieval-Augmented Generation chatbot that answers questions using relevant information retrieved from documents. The project focuses on document ingestion, text chunking, embeddings, vector search, and context-grounded responses.",
    technologies: ["Python", "LangChain", "FastAPI", "ChromaDB", "Hugging Face embeddings", "Streamlit", "Docker"],
    sourceUrl: "https://github.com/Meyyarivu/RAG_CHATBOT",
    overview: "A document question-answering application built around a retrieval-augmented generation pipeline.",
    problem: "General-purpose language models may not know the contents of a user's documents, and unsupported answers can be difficult to verify.",
    solution: "The app ingests and chunks documents, embeds their content using the local Hugging Face sentence-transformers model, retrieves relevant context through a vector store, and uses that context in a response pipeline.",
    workflow: ["Ingest and extract document text", "Split source text into chunks", "Generate embeddings with sentence-transformers/all-MiniLM-L6-v2", "Store and search vectors with ChromaDB (or FAISS)", "Provide retrieved context to the RAG response pipeline"],
    features: ["Document ingestion and text extraction", "Text chunking and embedding generation", "ChromaDB and FAISS vector-store support", "FastAPI backend and Streamlit interface", "Pluggable Ollama and OpenAI LLM providers", "Retrieved source transparency"],
    learnings: "The repository demonstrates how document preparation, embeddings, vector search, and a pluggable LLM pipeline fit together in a source-grounded Q&A application.",
  },
  {
    slug: "ai-ecommerce-recommendation",
    title: "AI E-commerce Recommendation System",
    description: "An AI-based e-commerce application designed to improve product discovery and provide relevant product recommendations through a modern shopping experience.",
    technologies: ["React", "Axios", "Python", "Flask", "Pandas", "Scikit-learn", "TF-IDF", "Cosine similarity"],
    sourceUrl: "https://github.com/Meyyarivu/AI-based-e-commerce-recommendation-system",
    liveUrl: "https://ai-based-e-commerce-recommendation.vercel.app/",
    overview: "A React shopping interface backed by a Flask API and a content-based product recommendation model.",
    problem: "Shoppers need a way to find products related to an item they are interested in.",
    solution: "The source combines product name, category, and description, vectorizes that text with scikit-learn's TF-IDF implementation, and ranks other products using cosine similarity. The React app calls the Flask recommendations endpoint through Axios.",
    workflow: ["Load product data with Pandas", "Combine product name, category, and description", "Create TF-IDF vectors", "Rank products by cosine similarity", "Fetch recommendations in the React interface through the Flask API"],
    features: ["Product search input", "Content-based recommendations", "Flask product and recommendation endpoints", "React interface connected to the API with Axios"],
    learnings: "This project connects a text-based recommendation workflow with a separate web frontend and API, and demonstrates how product descriptions can be used for similarity-based discovery.",
  },
  {
    slug: "nlp-ticket-classifier",
    title: "NLP Support Ticket Classifier",
    description: "An NLP-based support ticket classification system designed to categorize incoming support requests and help route them to the appropriate department.",
    technologies: ["Python", "NLP", "Streamlit", "Scikit-learn", "Pandas", "NumPy", "TF-IDF", "Logistic Regression"],
    sourceUrl: "https://github.com/Meyyarivu/SmartTriage-AI-Support-Classifier",
    overview: "A Streamlit application that classifies support tickets into categories and supports triage workflows.",
    problem: "Incoming support requests need to be categorized so they can be routed to the appropriate department.",
    solution: "The app preprocesses ticket text and uses a TF-IDF vectorizer with Logistic Regression to predict a category. It also includes confidence-based review handling and model diagnostics.",
    workflow: ["Prepare ticket subject and body text", "Convert text to features with TF-IDF", "Predict a ticket category with Logistic Regression", "Display results and model diagnostics in Streamlit"],
    features: ["Ticket categorization", "Confidence-based human review fallback", "Priority tagging", "Batch CSV upload and result download", "Accuracy, precision, recall, F1, and confusion-matrix diagnostics"],
    learnings: "The implementation explores text preprocessing, model training and evaluation, confidence-based triage, and a lightweight interactive interface. No model accuracy claim is made here.",
  },
  {
    slug: "codelens",
    title: "CodeLens",
    description: "CodeLens is an upcoming project currently under development. Project features, implementation details, and technical documentation will be added as development progresses.",
    technologies: [],
    sourceUrlPlaceholder: "GitHub URL pending",
    placeholder: true,
    status: "In Progress",
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}
