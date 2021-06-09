<?php

namespace App\Controllers;

use CodeIgniter\HTTP\Response;

class UserController extends BaseController
{

    /** 
     * @return JSON<Response>
     */
    public function index()
    {
        $users = $this->fetchApi(25);

        return $this->getResponse([
            'message' => 'Users retrieved successfully',
            'data' => [
                'records' => count($users),
                'users_info' => $users
            ],
        ]);
    }

    /**
     * @param default_users default 10 users
     */
    private function fetchApi($default_users = 10)
    {
        // creating a curl request an assign it to the client @var
        $client = \Config\Services::curlrequest();

        // getting from the env configuration api url for security reasons
        $uri = getenv('API_EXTERNAL_URI') . '/api/?results=' . $default_users;

        // stablishing the method and uri request   
        $response = $client->request('GET', $uri);

        // asigning the body request random call to @var users
        $users = json_decode(json_decode($response->getJSON()));

        return $users->results;
    }

    /** 
     * @return JSON<Response>
     */
    public function fetchAndOrder()
    {
        $users = $this->fetchApi(10);

        $userOrdeByName = array();

        for ($i = 0; $i < count($users); $i++) {
            array_push($userOrdeByName, $users[$i]->name->first);
        }

        return $this->getResponse([
            'message' => 'Users retrieved successfully',
            'data' => [
                'records' => count($users),
                'filter_by_name' => $userOrdeByName
            ],
        ]);
    }

    /** 
     * @return JSON<Response>
     */
    public function fetchAndFind($ageDefault)
    {
        $user = $this->fetchApi(1);

        $userAgeGraterThan = $user[0]->dob->age > $ageDefault ? $user[0]->dob->age : 'Age is not greater than the given one!';

        return $this->getResponse([
            'message' => 'User retrieved successfully',
            'data' => [
                'records' => count($user),
                'age_greater_than' => $userAgeGraterThan,
                'info' => $user[0]
            ],
        ]);
    }

    /**
     * @return JSON<Response>
     */
    public function fetchAndCount()
    {
        $users = $this->fetchApi(5);

        $usersMostRepeatedLetter = array();

        for ($i = 0; $i < count($users); $i++) {
            $fullName = $users[$i]->name->title . $users[$i]->name->first . $users[$i]->name->last;

            // Convert it to lowercase and replace any white space  
            $lowerdAndTrimmed = strtolower(str_replace(' ', '', $fullName));

            // splitted into pieces
            $splittedAndCount = array_count_values(str_split($lowerdAndTrimmed));

            // order the array
            arsort($splittedAndCount);

            // getting the keys values
            $mostRepeated =  array_keys($splittedAndCount)[0];

            // pushing into the array accumulated
            array_push($usersMostRepeatedLetter, [
                $lowerdAndTrimmed => $mostRepeated
            ]);
        }


        return $this->getResponse([
            'message' => 'User retrieved successfully',
            'data' => [
                'records' => count($users),
                'most_repeated_letter' => $usersMostRepeatedLetter,
                'info' => $users
            ],
        ]);
    }
}
