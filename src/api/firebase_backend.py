import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Initialize Firebase Admin SDK
cred = credentials.Certificate('serviceAccountKey.json')
firebase_admin.initialize_app(cred)

# Get a reference to the Firestore database
db = firestore.client()

# Retrieve all documents from a collection
def get_all_documents(collection_name):
    collection_ref = db.collection(collection_name)
    docs = collection_ref.stream()

    documents = []
    for doc in docs:
        data = doc.to_dict()
        documents.append(data)

    return documents

# Example usage
collection_name = 'documents'
all_documents = get_all_documents(collection_name)
for doc in all_documents:
    print('Document:', doc)
