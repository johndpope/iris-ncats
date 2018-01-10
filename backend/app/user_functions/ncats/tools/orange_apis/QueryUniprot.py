""" This module defines the class QueryPharos which connects to APIs at
http://www.uniprot.org/uploadlists/, querying reactome pathways from uniprot id.
"""

__author__ = ""
__copyright__ = ""
__credits__ = []
__license__ = ""
__version__ = ""
__maintainer__ = ""
__email__ = ""
__status__ = "Prototype"

import requests
#import CachedMethods


class QueryUniprot:
    API_BASE_URL = "http://www.uniprot.org/uploadlists/"

    @staticmethod
    #@CachedMethods.register
    def uniprot_id_to_reactome_pathways(uniprot_id):
        """returns a ``set`` of reactome IDs of pathways associated with a given string uniprot ID

        :param uniprot_id: a ``str`` uniprot ID, like ``"P68871"``
        :returns: a ``set`` of string Reactome IDs
        """

        payload = { 'from':   'ACC',
                    'to':     'REACTOME_ID',
                    'format': 'tab',
                    'query':  uniprot_id }
        contact = "stephen.ramsey@oregonstate.edu"
        header = {'User-Agent': 'Python %s' % contact}
        res = requests.post(QueryUniprot.API_BASE_URL, data=payload, headers=header)
        assert 200 == res.status_code
        res_set = set()
        for line in res.text.splitlines():
            field_str = line.split("\t")[1]
            if field_str != "To":
                res_set.add(field_str)
        return res_set

    @staticmethod
    #@CachedMethods.register
    def uniprot_id_to_gene_name(uniprot_id):
        """returns a ``set`` of reactome IDs of pathways associated with a given string uniprot ID

        :param uniprot_id: a ``str`` uniprot ID, like ``"P68871"``
        :returns: a ``set`` of string Reactome IDs
        """

        payload = { 'from':   'ACC',
                    'to':     'GENENAME',
                    'format': 'tab',
                    'query':  uniprot_id }
        contact = "stephen.ramsey@oregonstate.edu"
        header = {'User-Agent': 'Python %s' % contact}
        res = requests.post(QueryUniprot.API_BASE_URL, data=payload, headers=header)
        assert 200 == res.status_code
        res_set = set()
        for line in res.text.splitlines():
            field_str = line.split("\t")[1]
            if field_str != "To":
                res_set.add(field_str)
        return res_set


if __name__ == '__main__':
    print(QueryUniprot.uniprot_id_to_reactome_pathways("P68871"))
    print(QueryUniprot.uniprot_id_to_reactome_pathways("Q16621"))
    print(QueryUniprot.uniprot_id_to_reactome_pathways("P09601"))
    print(QueryUniprot.uniprot_id_to_gene_name("P09601"))
    #print(CachedMethods.cache_info())
