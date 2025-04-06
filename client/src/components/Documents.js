import React, { useState } from 'react';
import './Documents.css';

const Documents = ({ user }) => {
    const [selectedFile, setSelectedFile] = useState(null);

    // Mock data for demonstration
    const documents = [
        {
            id: 1,
            type: 'ID Proof',
            status: 'verified',
            uploadedAt: '2023-01-15',
            file: 'id_proof.pdf'
        },
        {
            id: 2,
            type: 'Address Proof',
            status: 'pending',
            uploadedAt: '2023-01-20',
            file: 'address_proof.pdf'
        },
        {
            id: 3,
            type: 'Bank Details',
            status: 'rejected',
            uploadedAt: '2023-02-01',
            file: 'bank_details.pdf'
        }
    ];

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleUpload = (e) => {
        e.preventDefault();
        if (selectedFile) {
            // Mock file upload
            console.log('Uploading file:', selectedFile.name);
            setSelectedFile(null);
        }
    };

    return (
        <div className="documents">
            <h2>Document Management</h2>

            <div className="upload-section">
                <h3>Upload New Document</h3>
                <form onSubmit={handleUpload}>
                    <div className="form-group">
                        <label>Document Type</label>
                        <select required>
                            <option value="">Select Document Type</option>
                            <option value="id">ID Proof</option>
                            <option value="address">Address Proof</option>
                            <option value="bank">Bank Details</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Document File</label>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            accept=".pdf,.jpg,.jpeg,.png"
                            required
                        />
                    </div>
                    <button type="submit" disabled={!selectedFile}>
                        Upload Document
                    </button>
                </form>
            </div>

            <div className="document-list">
                <h3>Your Documents</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Document Type</th>
                            <th>Status</th>
                            <th>Uploaded At</th>
                            <th>File</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {documents.map(doc => (
                            <tr key={doc.id}>
                                <td>{doc.type}</td>
                                <td className={doc.status}>{doc.status}</td>
                                <td>{doc.uploadedAt}</td>
                                <td>{doc.file}</td>
                                <td>
                                    <button className="view-btn">View</button>
                                    {doc.status === 'rejected' && (
                                        <button className="reupload-btn">Reupload</button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Documents; 