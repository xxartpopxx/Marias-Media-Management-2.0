#!/usr/bin/env python3
"""
Backend API Testing Suite
Tests all backend endpoints for the portfolio website
"""

import requests
import json
import time
from datetime import datetime
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv('/app/frontend/.env')

# Get backend URL from frontend environment
BACKEND_URL = os.getenv('REACT_APP_BACKEND_URL')
if not BACKEND_URL:
    print("❌ ERROR: REACT_APP_BACKEND_URL not found in frontend/.env")
    exit(1)

API_BASE_URL = f"{BACKEND_URL}/api"

print(f"🔍 Testing Backend APIs at: {API_BASE_URL}")
print("=" * 60)

def test_root_endpoint():
    """Test the root API endpoint"""
    print("\n📍 Testing Root Endpoint (/api/)")
    try:
        response = requests.get(f"{API_BASE_URL}/", timeout=10)
        print(f"   Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"   Response: {data}")
            if data.get('message') == 'Hello World':
                print("   ✅ Root endpoint working correctly")
                return True
            else:
                print("   ❌ Unexpected response message")
                return False
        else:
            print(f"   ❌ Failed with status code: {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"   ❌ Request failed: {str(e)}")
        return False

def test_status_endpoints():
    """Test status check endpoints (POST and GET)"""
    print("\n📍 Testing Status Endpoints")
    
    # Test POST /api/status
    print("   Testing POST /api/status")
    test_data = {
        "client_name": "Test Client Portfolio"
    }
    
    try:
        response = requests.post(f"{API_BASE_URL}/status", 
                               json=test_data, 
                               headers={'Content-Type': 'application/json'},
                               timeout=10)
        print(f"   POST Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"   POST Response: {json.dumps(data, indent=2)}")
            
            # Validate response structure
            required_fields = ['id', 'client_name', 'timestamp']
            if all(field in data for field in required_fields):
                print("   ✅ POST /api/status working correctly")
                post_success = True
            else:
                print(f"   ❌ Missing required fields. Expected: {required_fields}")
                post_success = False
        else:
            print(f"   ❌ POST failed with status code: {response.status_code}")
            print(f"   Response: {response.text}")
            post_success = False
            
    except requests.exceptions.RequestException as e:
        print(f"   ❌ POST request failed: {str(e)}")
        post_success = False
    
    # Test GET /api/status
    print("   Testing GET /api/status")
    try:
        response = requests.get(f"{API_BASE_URL}/status", timeout=10)
        print(f"   GET Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"   GET Response: Found {len(data)} status checks")
            if isinstance(data, list):
                print("   ✅ GET /api/status working correctly")
                get_success = True
            else:
                print("   ❌ Expected list response")
                get_success = False
        else:
            print(f"   ❌ GET failed with status code: {response.status_code}")
            get_success = False
            
    except requests.exceptions.RequestException as e:
        print(f"   ❌ GET request failed: {str(e)}")
        get_success = False
    
    return post_success and get_success

def test_contact_endpoints():
    """Test contact form endpoints (POST and GET)"""
    print("\n📍 Testing Contact Form Endpoints")
    
    # Test POST /api/contact
    print("   Testing POST /api/contact")
    test_contact_data = {
        "firstName": "Maria",
        "lastName": "Portfolio",
        "email": "maria@example.com",
        "message": "Testing the contact form for the portfolio website performance optimization project."
    }
    
    try:
        response = requests.post(f"{API_BASE_URL}/contact", 
                               json=test_contact_data, 
                               headers={'Content-Type': 'application/json'},
                               timeout=10)
        print(f"   POST Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"   POST Response: {json.dumps(data, indent=2)}")
            
            # Validate response structure
            required_fields = ['id', 'firstName', 'lastName', 'email', 'message', 'timestamp']
            if all(field in data for field in required_fields):
                print("   ✅ POST /api/contact working correctly")
                post_success = True
            else:
                print(f"   ❌ Missing required fields. Expected: {required_fields}")
                post_success = False
        else:
            print(f"   ❌ POST failed with status code: {response.status_code}")
            print(f"   Response: {response.text}")
            post_success = False
            
    except requests.exceptions.RequestException as e:
        print(f"   ❌ POST request failed: {str(e)}")
        post_success = False
    
    # Test GET /api/contact
    print("   Testing GET /api/contact")
    try:
        response = requests.get(f"{API_BASE_URL}/contact", timeout=10)
        print(f"   GET Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"   GET Response: Found {len(data)} contact submissions")
            if isinstance(data, list):
                print("   ✅ GET /api/contact working correctly")
                get_success = True
            else:
                print("   ❌ Expected list response")
                get_success = False
        else:
            print(f"   ❌ GET failed with status code: {response.status_code}")
            get_success = False
            
    except requests.exceptions.RequestException as e:
        print(f"   ❌ GET request failed: {str(e)}")
        get_success = False
    
    return post_success and get_success

def test_error_handling():
    """Test error handling with invalid requests"""
    print("\n📍 Testing Error Handling")
    
    # Test invalid POST data for status endpoint
    print("   Testing invalid POST data for /api/status")
    try:
        response = requests.post(f"{API_BASE_URL}/status", 
                               json={}, 
                               headers={'Content-Type': 'application/json'},
                               timeout=10)
        print(f"   Status Code: {response.status_code}")
        
        if response.status_code == 422:  # FastAPI validation error
            print("   ✅ Proper validation error handling")
            status_error_handling = True
        else:
            print(f"   ⚠️  Unexpected status code for invalid data: {response.status_code}")
            status_error_handling = False
            
    except requests.exceptions.RequestException as e:
        print(f"   ❌ Request failed: {str(e)}")
        status_error_handling = False
    
    # Test invalid POST data for contact endpoint
    print("   Testing invalid POST data for /api/contact")
    try:
        response = requests.post(f"{API_BASE_URL}/contact", 
                               json={"firstName": "Test"}, 
                               headers={'Content-Type': 'application/json'},
                               timeout=10)
        print(f"   Status Code: {response.status_code}")
        
        if response.status_code == 422:  # FastAPI validation error
            print("   ✅ Proper validation error handling")
            contact_error_handling = True
        else:
            print(f"   ⚠️  Unexpected status code for invalid data: {response.status_code}")
            contact_error_handling = False
            
    except requests.exceptions.RequestException as e:
        print(f"   ❌ Request failed: {str(e)}")
        contact_error_handling = False
    
    return status_error_handling and contact_error_handling

def main():
    """Run all backend tests"""
    print("🚀 Starting Backend API Test Suite")
    print(f"⏰ Test started at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    
    results = {
        'root_endpoint': test_root_endpoint(),
        'status_endpoints': test_status_endpoints(),
        'contact_endpoints': test_contact_endpoints(),
        'error_handling': test_error_handling()
    }
    
    print("\n" + "=" * 60)
    print("📊 TEST RESULTS SUMMARY")
    print("=" * 60)
    
    total_tests = len(results)
    passed_tests = sum(results.values())
    
    for test_name, passed in results.items():
        status = "✅ PASS" if passed else "❌ FAIL"
        print(f"   {test_name.replace('_', ' ').title()}: {status}")
    
    print(f"\n🎯 Overall Result: {passed_tests}/{total_tests} tests passed")
    
    if passed_tests == total_tests:
        print("🎉 All backend APIs are working correctly!")
        return True
    else:
        print("⚠️  Some backend APIs have issues that need attention")
        return False

if __name__ == "__main__":
    success = main()
    exit(0 if success else 1)