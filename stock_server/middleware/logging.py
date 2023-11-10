from typing import Any
from django.http import HttpResponse
import logging
from django.utils.deprecation import MiddlewareMixin

logger = logging.getLogger(__name__)

class LoggingMiddleware(MiddlewareMixin):
    def __init__(self, get_response) -> None:
        self.get_response = get_response
        logger.warning('initialize')
    
    def __call__(self, request) -> Any:
        logger.warning('1.get_response之前')
        response = self.get_response(request)
        logger.warning('4.get_response之後')
        return response
    
    # middleware 四件套
    def process_request(self, request):
        return None
    
    # view_args 是将传递给视图的位置参数的列表。
    # view_kwargs 是将传递给视图的关键字参数的字典。
    def process_view(self, request, view_func, view_args, view_kwargs):
        logger.warning('2. between rq and rs')
        return None
    
    def process_exception(self, request, exception):
        logger.warning('---exception---')
        return None
    
    def process_response(self, request, response):
        logger.warning('3. view之後')
        return response