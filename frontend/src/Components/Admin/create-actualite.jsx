import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddNewsForm = () => {
  const [predefinedTags, setPredefinedTags] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    tags: [],
    attachments: [],
  });

  const [currentAttachment, setCurrentAttachment] = useState({
    label: "",
    file: null,
  });

  // API configuration
  const api = axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  // Load tags on component mount
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await api.get("/gestionTagIsta");
        setPredefinedTags(response.data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
        toast.error(`Erreur lors du chargement des tags: ${err.message}`, {
          autoClose: 45000
        });
      }
    };
    fetchTags();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTagSelect = (e) => {
    const selectedTagId = parseInt(e.target.value);
    if (selectedTagId && !formData.tags.some(tag => tag.tag_id === selectedTagId)) {
      const selectedTag = predefinedTags.find(tag => tag.tag_id === selectedTagId);
      setFormData({
        ...formData,
        tags: [...formData.tags, selectedTag]
      });
    }
  };

  const handleTagRemove = (tagIdToRemove) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter(tag => tag.tag_id !== tagIdToRemove)
    });
  };

  const handleAttachmentChange = (e) => {
    const { name, value } = e.target;
    setCurrentAttachment({
      ...currentAttachment,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setCurrentAttachment({
      ...currentAttachment,
      file: e.target.files[0],
    });
  };

  const handleAddAttachment = () => {
    if (currentAttachment.label && currentAttachment.file) {
      setFormData({
        ...formData,
        attachments: [...formData.attachments, currentAttachment],
      });
      setCurrentAttachment({
        label: "",
        file: null,
      });
      toast.info("Pièce jointe ajoutée avec succès", {
        autoClose: 3000
      });
    } else {
      toast.warning("Veuillez remplir tous les champs de la pièce jointe", {
        autoClose: 3000
      });
    }
  };

  const handleRemoveAttachment = (index) => {
    const updatedAttachments = [...formData.attachments];
    updatedAttachments.splice(index, 1);
    setFormData({
      ...formData,
      attachments: updatedAttachments,
    });
    toast.info("Pièce jointe supprimée", {
      autoClose: 3000
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("content", formData.content);

      // Add tags
      formData.tags.forEach((tag, index) => {
        formDataToSend.append(`tags[${index}][tag_id]`, tag.tag_id);
      });

      // Add attachments
      formData.attachments.forEach((attachment, index) => {
        formDataToSend.append(`attachments[${index}][label]`, attachment.label);
        formDataToSend.append(`attachments[${index}][file]`, attachment.file);
      });

      // Special headers for file upload
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      await api.post("/gestionNewsIsta", formDataToSend, config);

      // Reset form after success
      setFormData({
        title: "",
        content: "",
        tags: [],
        attachments: [],
      });

      // Success notification
      toast.success('Annonce publiée avec succès!', {
        position: "top-right",
        autoClose: 45000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

    } catch (err) {
      // Error notification
      toast.error(err.response?.data?.message || err.message || "Échec de la publication de l'annonce", {
        position: "top-right",
        autoClose: 45000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-8 bg-gray-100">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Erreur ! </strong>
              <span className="block sm:inline">{error}</span>
              <button onClick={() => setError(null)} className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
                </svg>
              </button>
            </div>
          </main>
        </div>
        <ToastContainer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <ToastContainer />
      
      <div className="flex flex-1">
        <Sidebar />
        
        <main className="flex-1 p-7 bg-gray-100">
          <div className="max-w-4xl mx-auto shadow-lg p-6 mt-5">
            <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center border-b-4 border-[#004a93] pb-5">
              Ajouter une Annonce
            </h1>

            <form onSubmit={handleSubmit}>
              {/* Title Field */}
              <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
                  Titre
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Content Field */}
              <div className="mb-4">
                <label htmlFor="content" className="block text-gray-700 font-medium mb-2">
                  Contenu
                </label>
                <textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  rows="6"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              {/* Tags Field with Select */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Tags
                </label>
                <div className="flex mb-2">
                  <select
                    onChange={handleTagSelect}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Sélectionner un tag</option>
                    {predefinedTags.map(tag => (
                      <option 
                        key={tag.tag_id} 
                        value={tag.tag_id}
                        disabled={formData.tags.some(t => t.tag_id === tag.tag_id)}
                      >
                        {tag.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.tags.map(tag => (
                    <div key={tag.tag_id} className="flex items-center bg-gray-200 px-3 py-1 rounded-full">
                      <span className="mr-2">{tag.name}</span>
                      <button
                        type="button"
                        onClick={() => handleTagRemove(tag.tag_id)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Attachments Field */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Pièces jointes
                </label>
                
                {/* Current Attachment Input */}
                <div className="mb-4 p-4 border border-gray-300 rounded-md">
                  <div className="mb-3">
                    <label htmlFor="attachmentLabel" className="block text-gray-700 mb-1">
                      Libellé
                    </label>
                    <input
                      type="text"
                      id="attachmentLabel"
                      name="label"
                      value={currentAttachment.label}
                      onChange={handleAttachmentChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Description du fichier"
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="attachmentFile" className="block text-gray-700 mb-1">
                      Fichier
                    </label>
                    <input
                      type="file"
                      id="attachmentFile"
                      onChange={handleFileChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <button
                    type="button"
                    onClick={handleAddAttachment}
                    disabled={!currentAttachment.label || !currentAttachment.file}
                    className={`px-4 py-2 rounded-md ${currentAttachment.label && currentAttachment.file ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                  >
                    Ajouter la pièce jointe
                  </button>
                </div>
                
                {/* List of Added Attachments */}
                <div className="space-y-2">
                  {formData.attachments.map((attachment, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-100 rounded-md">
                      <div>
                        <p className="font-medium">{attachment.label}</p>
                        <p className="text-sm text-gray-600">{attachment.file?.name}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleRemoveAttachment(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Supprimer
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#00904a] text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Publier l'annonce
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddNewsForm;