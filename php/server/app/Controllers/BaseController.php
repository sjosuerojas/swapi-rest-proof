<?php

namespace App\Controllers;

use App\Libraries\CodeIgniterCORS\CodeIgniterCORS;
use CodeIgniter\Controller;
use CodeIgniter\HTTP\CLIRequest;
use CodeIgniter\HTTP\IncomingRequest;
use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use Psr\Log\LoggerInterface;

/**
 * Class BaseController
 *
 * BaseController provides a convenient place for loading components
 * and performing functions that are needed by all your controllers.
 * Extend this class in any new controllers:
 *     class Home extends BaseController
 *
 * For security be sure to declare any new methods as protected or private.
 */

class BaseController extends Controller
{
	/**
	 * Instance of the main Request object.
	 *
	 * @var IncomingRequest|CLIRequest
	 */
	protected $request;

	/**
	 * An array of helpers to be loaded automatically upon
	 * class instantiation. These helpers will be available
	 * to all other controllers that extend BaseController.
	 *
	 * @var array
	 */
	protected $helpers = [];

	/**
	 * Constructor.
	 *
	 * @param RequestInterface  $request
	 * @param ResponseInterface $response
	 * @param LoggerInterface   $logger
	 */
	public function initController(RequestInterface $request, ResponseInterface $response, LoggerInterface $logger)
	{
		// Do Not Edit This Line
		parent::initController($request, $response, $logger);

		if (!is_cli()) {
			$this->_cors();
		}
	}

	private function _cors(): void
	{
		if (
			empty($_SERVER['HTTP_X_REQUESTED_WITH']) ||
			(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) &&
				(strtoupper($_SERVER['HTTP_X_REQUESTED_WITH']) === 'XMLHTTPREQUEST'))
		) {
			// Use CI headers management and send headers 
			$ciCORS = new CodeIgniterCORS();
			$ciCORS->handle($this->request, $this->response);
		}
	}

	public function getResponse(
		array $responseBody,
		int $code = ResponseInterface::HTTP_OK
	) {
		return $this
			->response
			->setStatusCode($code)
			->setJSON($responseBody);
	}

	public function getRequestInput(IncomingRequest $request)
	{
		$input = $request->getPost();
		if (empty($input)) {
			//convert request body to associative array
			$input = json_decode($request->getBody(), true);
		}
		return $input;
	}
}
