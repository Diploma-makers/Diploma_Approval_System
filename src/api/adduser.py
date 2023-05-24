import json
import boto3

def lambda_handler(event, context):
    
    body = json.loads(event['body'])
    name = body['name']
    surname = body['surname']
    email = body['email']
    password = body['password']
    role = body['role']

    
    firestore_data = {
        'name': name,
        'surname': surname,
        'email': email,
        'role': role,
        'uid': event['requestContext']['authorizer']['claims']['sub']
    }

    
    response = {
        'statusCode': 200,
        'body': json.dumps({'message': 'Registration successful'})
    }
    return response